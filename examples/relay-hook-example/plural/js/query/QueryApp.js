const QueryApp = graphql`
  query QueryAppQuery {
    entries {
      ...Entries_entries
    }
  }
`;

export default QueryApp;
