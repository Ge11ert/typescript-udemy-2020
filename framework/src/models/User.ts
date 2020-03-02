export type UserProps = {
  name: string,
  age: number,
}

export class User {
  constructor(private props: UserProps) {}

  get(propName: keyof UserProps) {
    return this.props[propName];
  }

  set(newProps: Partial<UserProps>): void {
    Object.assign(this.props, newProps);
  }
}
