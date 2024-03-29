import clsx from 'clsx';
import Icon from '../icons';

export function Loading({
  size = 6,
  fill = '#FFF',
  containerClass = '',
}: {
  size?: number;
  fill?: string;
  containerClass?: string;
}): JSX.Element {
  return (
    <div
      className={clsx(
        containerClass
          ? containerClass
          : 'relative z-50 flex flex-auto items-center justify-center self-stretch'
      )}
    >
      <Icon glyph={Icon.glyph.loading} fill={fill} size={size} />
    </div>
  );
}
