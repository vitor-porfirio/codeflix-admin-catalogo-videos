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

  //just a constructor, different from create, has no business rule
  constructor(props: CategoryContructorProps) {
    this.category_id = props.category_id;
    this.name = props.name;
    this.description = props.description ?? null;
    this.is_active = props.is_active ?? true;
    this.created_at = props.created_at ?? new Date();
  }
  //factory method- has business rules, validations, etc.
  static create(props: CategoryContructorProps): Category {
    return new Category(props);
  }

  //update is too generic, then its not a good option to use
  // update(props: Partial<CategoryContructorProps>) : Category {
  //     return new Category({...this, ...props})
  // }

  // Change name is a good a better practice
  // we can have business rules, validations and events for this operations. 
  // *different from setter that can be used only inside classes, because its a value changer
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
