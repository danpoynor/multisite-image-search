type ContainerProps = {
  children: React.ReactNode;
  flexNoWrap?: boolean;
  py4?: boolean;
  fullWidth?: boolean;
};

export default function Container({ children, flexNoWrap, py4, fullWidth }: ContainerProps) {
  let containerClasses = 'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex-grow';

  // Conditionally set container classes based on any props received
  if (flexNoWrap) {
    containerClasses += ' flex flex-no-wrap justify-between items-center';
  }
  if (py4) {
    containerClasses += ' py-4';
  }
  if (fullWidth) {
    // Replace max-w-6xl class if fullWidth is true
    containerClasses = containerClasses.replace('max-w-6xl', 'w-full');
    containerClasses += ' w-full';
  }

  // Render the container with the appropriate classes and children
  return <div className={containerClasses}>{children}</div>;
}
