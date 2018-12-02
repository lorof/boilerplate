import * as React from "react";
import * as css from "./index.scss";

export interface IHelloProps {
  compiler: string;
  framework: string;
}

export class Hello extends React.Component<IHelloProps, {}> {
  public render() {
    return (
      <div className={css.App}>
        <header className={css.Header}>
          <h1>
            Hello from {this.props.compiler} and {this.props.framework}!
          </h1>
        </header>
        <main className={css.Main}>
          контент
        </main>
        <footer className={css.Footer}>
          подвал
        </footer>
      </div>
    );
  }
}
