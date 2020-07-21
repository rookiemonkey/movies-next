const setResults = (data, setSearchResults, setTotalResults) => {
    setSearchResults(data.Search)
    setTotalResults(data.totalResults)
}

export default setResults;