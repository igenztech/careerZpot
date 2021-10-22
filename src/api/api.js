export default fetchData = async () => {
  try {
    const response = await fetch("http://localhost:8000/resume/file")
    const data = await response.toJson()
    return data
  } catch (e) {
    console.log(e)
  }
}
