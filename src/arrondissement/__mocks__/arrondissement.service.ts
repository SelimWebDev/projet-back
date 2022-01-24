// import arrondissementStub

export const ArrondissementService = jest.fn().mockReturnValue({
  getAll: jest.fn().mockResolvedValue('ok'), //mettre arrondissementStub à la place
});
