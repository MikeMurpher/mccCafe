import { Footer } from '../footer';
import { NavContainer } from '../navigation';
import classNames from 'classnames';

export function LayoutContainer(props: any): JSX.Element {
  return (
    <div className="relative overflow-hidden bg-amber-900">
      <div className="relative">
        <div>
          <NavContainer />
          <main className="my-8">
            <div
              className={classNames(
                props?.isFullWidth ? `w-full` : `max-w-7xl`,
                'mx-auto px-8'
              )}
            >
              {props.children}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
