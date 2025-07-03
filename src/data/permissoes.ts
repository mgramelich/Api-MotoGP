export const permissoes = {
  admin: { // Agora 'admin' é uma chave direta do objeto permissoes
    teams: {
      access: true,
      add: true,
      update: true,
      delete: true,
    },
    riders: {
      access: true,
      add: true,
      update: true,
      delete: true,
    },
  },

  convidado: {
    teams: {
      access: true,
      add: false,
      update: false,
      delete: false,
    },
    riders: {
      access: true,
      add: false,
      update: false,
      delete: false,
    },
  },

  usuario: {
    teams: {
      access: true,
      add: false,
      update: false,
      delete: false,
    },
    riders: {
      access: true,
      add: false,
      update: false,
      delete: false,
    },
  }
};