import React from 'react'

type BreadcrumbItem = {
  name: string
  path?: string // Optional if some items are not clickable
}

type BreadcrumbProps = {
  items: BreadcrumbItem[]
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="w-full">
      <ol className="list-reset flex text-grey-dark">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              index === items.length - 1 ? 'text-gray-500' : 'text-blue-600'
            }
          >
            {item.path ? (
              <a href={item.path} className="text-blue-600 hover:text-blue-700">
                {item.name}
              </a>
            ) : (
              <span>{item.name}</span>
            )}
            {index < items.length - 1 && <span className="mx-2">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb
