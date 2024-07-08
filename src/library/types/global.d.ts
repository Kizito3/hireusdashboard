declare global {
  /** Custom function that minifies `localStorage.setItem()` */
  var ls: (key: string, value: string) => void;

  /** Custom function that minifies `localStorage.removeItem()` */
  var xls: (key: string) => void;
}

export {};
