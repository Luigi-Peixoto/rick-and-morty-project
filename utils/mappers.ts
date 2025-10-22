export const getStatus = (status: string): string => {
  switch (status) {
    case 'Alive':
      return 'Vivo';
    case 'Dead':
      return 'Morto';
    case 'unknown':
      return 'Desconhecido';
    default:
      return status;
  }
};

export const getSpecies = (species: string): string => {
  switch (species) {
    case 'Human':
      return 'Humano';
    case 'Alien':
      return 'Alienígena';
    case 'Humanoid':
      return 'Humanoide';
    default:
      return species;
  }
};

export const getGender = (gender: string): string => {
  switch (gender) {
    case 'Male':
      return 'Masculino';
    case 'Female':
      return 'Feminino';
    default:
      return gender;
  }
};

export const getOriginName = (name: string): string => {
  if (name === 'unknown') {
    return 'Desconhecido';
  }
  return name;
};
