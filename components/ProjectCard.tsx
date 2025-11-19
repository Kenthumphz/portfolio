type Props = { title: string; summary: string }
export default function ProjectCard({ title, summary }: Props){
  return (
    <article className="border rounded-lg p-4 hover:shadow-md transition">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-slate-600 mt-2">{summary}</p>
    </article>
  )
}
