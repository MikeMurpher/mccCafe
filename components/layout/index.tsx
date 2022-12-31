import { Footer } from '../footer';
import { NavContainer } from '../navigation';
import { StickyBanner } from '../stickyBanner';
import clsx from 'clsx';

export function LayoutContainer(props: any): JSX.Element {
  return (
    <>
      <StickyBanner />
      <div className="relative overflow-hidden bg-amber-900">
        <div className="relative">
          <div>
            <NavContainer />
            <main className="my-8">
              <div
                className={clsx(
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
    </>
  );
}
