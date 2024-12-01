import supabaseClient from "./supabase";

export async function getRules() {
  const { data, error } = await supabaseClient
    .from("product-rules")
    .select("*");
  if (error) {
    throw new Error("Error loading rules");
  }
  return data;
}

export async function insertRule(rule: any) {
  const { data, error } = await supabaseClient
    .from("product-rules")
    .insert([rule])
    .select();
  if (error) {
    throw new Error("Error adding new rule");
  }
  return data;
}

export async function getRuleByID(id: number) {
  const { data, error } = await supabaseClient
    .from("product-rules")
    .select("*")
    .eq("id", id);
  if (error) {
    throw new Error("Error getting rule");
  }
  return data;
}

export async function updateRule(rule: any, id: number) {
  const { data, error } = await supabaseClient
    .from("product-rules")
    .update(rule)
    .eq("id", id)
    .select();
  if (error) {
    throw new Error("Error updating rule");
  }
  return data;
}

export async function deleteRule(id: number) {
  const { data, error } = await supabaseClient
    .from("product-rules")
    .delete()
    .eq("id", id);
  if (error) {
    throw new Error("Error deleting rule");
  }
  return data;
}
