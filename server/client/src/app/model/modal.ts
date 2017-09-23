export class Modal {
    constructor(
      public title = 'Parabéns',
      public body = 'Você escolheu a resposta certa',
      public footer?: string
    ) {}
  }