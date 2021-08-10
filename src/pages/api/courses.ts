import { NextApiRequest, NextApiResponse } from "next";

import { v4 as uuid } from "uuid";

import { database, input, output } from "~/services/database";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> {
  try {
    if (request.method === "POST") {
      const { name, image, slug } = request.body;
      const id = uuid();

      const course = input({
        id: `COURSE#${id}`,
        module: `COURSE#${id}`,
        name,
        image,
        slug,
        created_at: new Date().toISOString(),
      });

      const result = await database.putItem({
        TableName: "reddevs-ead-courses",
        Item: course,
      });

      return response.status(200).json(result);
    }

    if (request.method === "GET") {
      const result = await database.scan({
        TableName: "reddevs-ead-courses",
        FilterExpression: "begins_with(id, :prefix)",
        ProjectionExpression: "id, #name, image, slug, created_at",
        ExpressionAttributeValues: {
          ":prefix": {
            S: "COURSE#",
          },
        },
        ExpressionAttributeNames: {
          "#name": "name",
        },
      });

      result.Items = result.Items.map((item) => output(item));

      return response.status(200).json(result);
    }

    // write in header allowed methods is get and post
    response.setHeader("Allow", "GET, POST");

    return response.status(405).json({
      message: "Method not allowed",
    });
  } catch (error) {
    return response.status(500).json({
      error: error.message,
    });
  }
}
