//! card component type

export interface ContactCard {
  data: {
    title: string;
    subTitle: string;
    button: string;
  };
}

// call to action types

export interface Call_to_Action {
  data: {
    title: string;
    subTitle: string;
    action: string;
  };
}
