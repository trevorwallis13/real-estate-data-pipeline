export const normalizeCsv = (csvData) => {
    return pipe(
        replaceNullVals,
        removeQualityFlagDisclaimer,
        replaceScientificNotation,
        replaceSpreadsheetErrors
    )(csvData)
}

export const flattenCsv = (csvData, header, startYear = 2000) => {
    return pipe (
        replaceCityStateComma,
        splitCsvRows,
        data => flattenArray(data, header, startYear),
        arrayToCsv,
        replaceCityStateUnderscore,
        replaceNullVals
    )(csvData)
 }

const pipe = (...fns) => (x) => fns.reduce((prevValue, fn) => fn(prevValue), x);

const replaceNullVals = (csvData) => csvData.replace(/[,]+[,\n]/g, (str) => str.replace(/(,)/g, '$1' + '0'))

const removeQualityFlagDisclaimer = (csvData) => csvData.replace(/\nquality.*/, '\n')

const replaceScientificNotation = (csvData) => csvData.replace(/\d.\d+E\+\d+/g, (num) => Number(num))

const replaceSpreadsheetErrors = (csvData) => csvData.replace(/#[A-Z\/0]+[\?!]/g, 0)

const splitCsvRows = (csvData) => csvData.split('\n').map(row => row.split(','))
 
const replaceCityStateComma = (csvData) => csvData.replace(/(".+), ([a-zA-Z]{2}")/g, "$1_$2")

const replaceCityStateUnderscore = (csvData) => csvData.replace(/(".+)_([a-zA-Z]{2}")/g, "$1, $2")
 
const flattenArray = (csvData, header, startYear) => {
 
    const headerRow = csvData.splice(0, 1)
    const idx = getFirstDataIndex(...headerRow)
    const startIdx = getStartIndex(...headerRow, startYear)
    const headers = headerRow[0].slice(0, idx).concat([header, 'month_date_yyyymm'])

    const final = [headers]

    csvData.forEach(row => {
        if(headerRow.indexOf("RegionName") !== -1 && headerRow.indexOf("StateName") !== -1 && row[headerRow.indexOf("RegionName")] === 'United States') {
            row[headerRow.indexOf("RegionName")] = 'US'
        } 
        const staticData = row.slice(0, idx)
  
        for (let i = startIdx; i < row.length; i++) {
            final.push([...staticData, row[i], formatDateAsYYYYMM(headerRow[0][i])])
        }
    })
 
    return final
}
 
const arrayToCsv = (data) => data.map(row => row.join(',')).join('\n').replace(/(".+)_([a-zA-Z]{2}")/, "$1, $2")

const getFirstDataIndex = (headerRow) => headerRow.findIndex(item => Date.parse(item))

const getStartIndex = (headerRow, date) => headerRow.findIndex(item => Date.parse(item) > Date.parse(date))

const formatDateAsYYYYMM = (dateString) => {
    const date = new Date(dateString)
    const year = date.getUTCFullYear()
    const month = date.getUTCMonth() + 1 < 10 ? '0' + (date.getUTCMonth() + 1) : date.getUTCMonth() + 1

    return `${year}${month}`
}