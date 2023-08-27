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
      id: string;
      name: string;
      url: string;
    };
    ourRadios: { id: string; name: string; url: string; isFavorite: boolean }[];
    favoriteRadios: { id: string; name: string; url: string }[];
    isRunning: boolean;
  };
}

export interface ForRedux {
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
    id: string;
    name: string;
    url: string;
  };
  ourRadios: { id: string; name: string; url: string; isFavorite: boolean }[];
  favoriteRadios: { id: string; name: string; url: string }[];
  isRunning: boolean;
}

export interface radio {
  id: string;
  name: string;
  url: string;
}
