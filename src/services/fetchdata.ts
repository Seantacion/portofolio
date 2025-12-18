import supabase from "../integrations/client"

export default async function getProject() {
  const { data, error } = await supabase
  .from("projects")
  .select(`
    id,
    project_name,
    description,
    tech_stack (
      id,
      icon
    )
  `)


  if (error) {
    console.error(error)
    return []
  }

  return data
}
