class ServiceRepo<T> {
    data: T;
    err: Error | null;
    success: boolean;
  
    constructor(data: T, err: Error | null = null, success: boolean = false) {
      this.data = data;
      this.err = err;
      this.success = success;
    }
  }
  