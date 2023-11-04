export type NotebookState = {
  loading: boolean;
};

type NotebookLoadingReducer = {
  type: NotebookReducerTypes.LOADING;
  payload?: undefined;
};

///////////////////////////
export type NotebooksOwner = {
  owner: string;
};

export type NotebookListType = {
  owner: string;
  id: number;
}

export type NotebooksAPIResponse = {
  notebooks: {
    id: number;
    name: string;
    owner: string;
  }[]
  //Não sei exatamente o que esperar mas deve ser um código? 404?
};

export type CreateNotebookDTO = {
  id: number;
  name: string;
  owner: string;
}

export type RequestNotebookDeletion = {
  owner: string;
  name: string;
}
