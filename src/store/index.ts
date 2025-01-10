import { create } from 'zustand';

const LOCAL_STORAGE_KEY = 'todo_tasks';

const loadTasksFromLocalStorage = (): StoreDataTypes.Task[] => {
  try {
    const tasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    return tasks ? JSON.parse(tasks) : [];
  } catch (error) {
    console.error('Failed to load tasks from localStorage:', error);
    return [];
  }
};

const saveTasksToLocalStorage = (tasks: StoreDataTypes.Task[]) => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Failed to save tasks to localStorage:', error);
  }
};

const useTodoStore = create<StoreDataTypes.TodoState>((set) => ({
  /**
   * NOTE: Reading from local storage is side effect. It can throw on 
   * - AccessDenied by user settings. (HANDLED! But without deep deving in implementation details it is unclear)
   * - Data is set as JSON is wrongly serialized or broken (HANDLED! But without deep deving in implementation details it is unclear)
   * - It is unsafe to read from global string storage without applyed proper type validation (TS type guards written manually or using libs like `zod`) 
   * 
   * Better to use safe fallback on start and load state by user intenttion in component or any other place within async action (router, module and etc)
   * ```ts
   * // ...
   * loadTasks: () => {
   *  const tasks = [];
   *  // Logic mentioned above 
   *  return tasks;
   * }
   * // ...
   * ```
   */
  tasks: loadTasksFromLocalStorage(), 
  filter: {},

  addTask: (task) =>
    set((state) => {
      const updatedTasks = [...state.tasks, task];
      saveTasksToLocalStorage(updatedTasks);
      return { tasks: updatedTasks };
    }),

  updateTask: (updatedTask) =>
    set((state) => {
      const updatedTasks = state.tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      );
      saveTasksToLocalStorage(updatedTasks);
      return { tasks: updatedTasks };
    }),

  deleteTask: (id) =>
    set((state) => {
      const updatedTasks = state.tasks.filter((task) => task.id !== id);
      saveTasksToLocalStorage(updatedTasks);
      return { tasks: updatedTasks };
    }),

  toggleTaskStatus: (id) =>
    set((state) => {
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === id) {
          const newStatus: 'Pending' | 'Completed' =
            task.status === 'Pending' ? 'Completed' : 'Pending';
          return { ...task, status: newStatus };
        }
        return task;
      });
      saveTasksToLocalStorage(updatedTasks);
      return { tasks: updatedTasks };
    }),

  setFilter: (filter) => set(() => ({ filter })),
}));

const useFilteredTasks = () =>
  useTodoStore((state) => {
    const { tasks, filter } = state;
    return tasks.filter((task) => {
      if (filter.category && task.category !== filter.category) return false;
      if (filter.status && task.status !== filter.status) return false;
      if (filter.search && !task.title.includes(filter.search)) return false;
      return true;
    });
  });

export { useFilteredTasks, useTodoStore };
