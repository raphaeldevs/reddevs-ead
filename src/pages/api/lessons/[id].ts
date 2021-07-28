import { NextApiRequest as Request, NextApiResponse as Response } from "next";
import { Lesson } from "../..";
import { supabase } from "../../../services/supabase";

async function handler(request: Request, response: Response): Promise<void> {
  try {
    const { id } = request.query;

    const {
      data: { url },
    } = await supabase
      .from<Lesson>("lessons")
      .select()
      .eq("id", String(id))
      .single();

    return response.json({ url });
  } catch (error) {
    return response.status(500).send(error.message);
  }
}

export default handler;
