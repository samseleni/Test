export type TResult = {
  name: string;
  url: string;
};

export type TPokemonsRequest = {
  count: number;
  next: string;
  previous: string;
  results: TResult[];
};

export type TAbilities = {
  is_hidden: boolean;
  slot: number;
  ability: TResult;
};

export type TGameIndices = {
    game_index: number;
    version: TResult;
};

export type THeldItems = {
    item: TResult;
};

export type TMoves = {
    move: TResult;
};

export type TPokemonInfoRequest = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: TAbilities[];
  forms: TResult[];
  game_indices: TGameIndices[];
  held_items: THeldItems[];
  moves: TMoves[];
};
