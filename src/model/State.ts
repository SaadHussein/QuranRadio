export interface stateManagment {
  QRadio: {
    MenuOpen: boolean;
    ourData: {
      language: {
        id: string;
        language: string;
        native: string;
        surah: string;
        radios: string;
      }[];
    };
    isRunning: boolean;
  };
}

export interface radio {
  id: string;
  name: string;
  url: string;
}
