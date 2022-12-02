import Image from 'next/image';

interface Props {
  header: string;
  contracts: ContractItemProps[];
}

export function ContractSection(props: Props) {
  return (
    <>
      <header>
        <h3 className="text-2xl font-medium leading-6 text-gray-50">
          {props?.header}
        </h3>
      </header>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 mt-5 mb-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
      >
        {props?.contracts?.map((c, i) => {
          return <ContractItem key={i} {...c} />;
        })}
      </ul>
    </>
  );
}

interface ContractItemProps {
  img: string;
  name: string;
  alt: string;
  contract: string;
  subItems: SubItemProps[];
}

function ContractItem(props: ContractItemProps) {
  const { name, subItems, alt, contract, img } = props;

  return (
    <li className="flex flex-col col-span-1 overflow-hidden text-center bg-white rounded-lg shadow">
      <div className="flex flex-col flex-1 px-4 py-3">
        <Image
          width="100"
          height="100"
          className="flex-shrink-0 w-auto h-32 mx-auto rounded-lg"
          src={img}
          alt={`${alt} Image`}
          title={contract}
        />
        <h3 className="mt-2 text-sm font-black text-gray-900 uppercase break-words">
          {name}
        </h3>
      </div>
      <div>
        <ul className="flex -mt-px divide-x divide-gray-200">
          {subItems.map((s: SubItemProps, i: number) => {
            return <SubItem key={i} {...s} />;
          })}
        </ul>
      </div>
    </li>
  );
}

interface SubItemProps {
  img: string;
  link: string;
  title: string;
}

function SubItem(props: SubItemProps) {
  const { img, link, title } = props;

  return (
    <li className="flex flex-1 w-0">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border hover:bg-gray-200"
      >
        <Image
          width="100"
          height="100"
          className="flex-shrink-0 w-5 h-5"
          src={img}
          alt={`${title} Image`}
          title={title}
        />
      </a>
    </li>
  );
}
