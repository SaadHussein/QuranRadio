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
    currentStation: {
      name: string;
      url: string;
    };
    ourRadios: { id: string; name: string; url: string }[];
  };
}

export interface radio {
  id: string;
  name: string;
  url: string;
}
