export type CategoryContructorProps = {
  category_id?: string;
  name: string;
  description?: string | null;
  is_active?: boolean;
  created_at?: Date;
};

export type CategoryCreateCommand = {
  name: string;
  description?: string | null;
  is_active?: boolean;
};

export class Category {
  category_id?: string;
  name: string;
  description: string | null;
  is_active: boolean;
  created_at: Date;

  //apenas um construtor, diferente do create, nao possui regra de negocio
  constructor(props: CategoryContructorProps) {
    this.category_id = props.category_id;
    this.name = props.name;
    this.description = props.description ?? null;
    this.is_active = props.is_active ?? true;
    this.created_at = props.created_at ?? new Date();
  }
  //factory method- possui regra de negocio, validacoes e etc
  static create(props: CategoryContructorProps): Category {
    return new Category(props);
  }

  //por ser muito generico acaba nao sendo a melhor opcao
  // update(props: Partial<CategoryContructorProps>) : Category {
  //     return new Category({...this, ...props})
  // }

  // boa pratica pois dessa forma representa uma operacao de troca de nome
  //  onde colocaremos regras de negocio e validacoes para essa operacao e eventos tambem
  // *diferente do setter que deve ser usado apenas dentro da classe pois representa apenas uma mudanca de valor
  changeName(name: string): void {
    this.name = name;
  }

  changeDescription(description: string): void {
    this.description = description;
  }

  activate() {
    this.is_active = true;
  }

  deactivate() {
    this.is_active = false;
  }

  toJSON() {
    return {
      category_id: this.category_id,
      name: this.name,
      description: this.description,
      is_active: this.is_active,
      created_at: this.created_at,
    };
  }
}
