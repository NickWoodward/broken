interface Props {
  title: string,
  description: string
}

export const FAQItem = (({title, description}:Props) => {
  return (
    <div className="faq__item">
      <div className="text-xl font-semibold text-primaryDark">{title}</div>
      <div className="mt-3 text-lg text-gray-500">{description}</div>
    </div>
  )
});