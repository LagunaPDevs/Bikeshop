import supabaseClient from "./supabase";

export async function getProducts() {
  const { data, error } = await supabaseClient.from("products").select("*");
  if (error) {
    throw new Error("Error getting products");
  }
  return data;
}
