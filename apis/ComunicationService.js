import { gql } from "graphql-tag";
export default class ComunicationService {
  static GetAllContents = gql`
    query GetAllContents {
      contents {
        id
        title
        description
        type
        url
        embeddable
        allow_download
        created_at
        updated_at
      }
    }
  `;

  static GetDetails(id) {
    return gql`
      query GetContent {
        getContent(id: "${id}") {
          title
          description
          type
          url
          embeddable
          allow_download
          created_at
          updated_at
        }
      }
    `;
  }
}
