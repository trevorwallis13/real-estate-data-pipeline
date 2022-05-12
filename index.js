import * as fs from 'fs'
import { normalizeCsv, flattenCsv } from './utils.js'
import { realtorComFiles, zillowFiles } from './importData.js'



const NormalizeRemoteCsv = (csvUrl, exportFileName, handler, header = "", startYear = 2000) => {
    const fileDirectory = `./exports/${exportFileName.match(/.+\//)}`

    if(!fs.existsSync(fileDirectory)){
        fs.mkdirSync(fileDirectory, {recursive: true})
    }

    fetch(csvUrl)
        .then(response => response.text())
        .then(data => {

            const normalizedData = handler(data, header, startYear)

            fs.writeFile(`./exports/${exportFileName}`, normalizedData, (err) => {
                if(err) throw err
                console.log(`New file saved! ${exportFileName}`)
            })
        })
}

const NormalizeLocalCsv = (filePathToImport, exportFileName, handler, header = "") => {
    
    fs.readFile(filePathToImport, "utf8", (err, data) => {
        if(err) throw err
        const newVals = handler(data, header)

        fs.writeFile(exportFileName, newVals, (err) => {
            if(err) throw err
            console.log("file saved!")
        })
    })
}

const allRealtorFiles = () => {
    for(let i = 0; i<realtorComFiles.length; i++) {
        NormalizeRemoteCsv(realtorComFiles[i].import, realtorComFiles[i].export, normalizeCsv)
    }
}

const allZillowFiles = () => {
    for(let i = 0; i<zillowFiles.length; i++) {
        NormalizeRemoteCsv(zillowFiles[i].import, zillowFiles[i].export, flattenCsv, zillowFiles[i].header, zillowFiles[i]?.startYear)
    }
}

const someZillowFiles = (indices) => {
    indices.forEach(i => {
        NormalizeRemoteCsv(zillowFiles[i].import, zillowFiles[i].export, flattenCsv, zillowFiles[i].header, zillowFiles[i]?.startYear)
    })
}

const someRealtorFiles = (indices) => {
    indices.forEach(i => {
        NormalizeRemoteCsv(realtorComFiles[i].import, realtorComFiles[i].export, normalizeCsv)
    })
}
someZillowFiles([3,5])