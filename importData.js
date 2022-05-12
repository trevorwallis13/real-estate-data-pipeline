export const realtorComFiles = [
    { //0
        import: 'https://econdata.s3-us-west-2.amazonaws.com/Reports/Core/RDC_Inventory_Core_Metrics_Metro.csv',
        export: 'realtorcom/realtorcom_metro_current/realtorcom_metro_current.csv'
    },
    { //1
        import: 'https://econdata.s3-us-west-2.amazonaws.com/Reports/Core/RDC_Inventory_Core_Metrics_Metro_History.csv',
        export: 'realtorcom/realtorcom_metro_historical/realtorcom_metro_historical.csv',
    },
    { //2
        import: 'https://econdata.s3-us-west-2.amazonaws.com/Reports/Core/RDC_Inventory_Core_Metrics_County.csv',
        export: 'realtorcom/realtorcom_county_current/realtorcom_county_current.csv'
    },
    { //3
        import: 'https://econdata.s3-us-west-2.amazonaws.com/Reports/Core/RDC_Inventory_Core_Metrics_County_History.csv',
        export: 'realtorcom/realtorcom_county_historical/realtorcom_county_historical.csv'
    },
    { //4
        import: 'https://econdata.s3-us-west-2.amazonaws.com/Reports/Core/RDC_Inventory_Core_Metrics_Zip.csv',
        export: 'realtorcom/realtorcom_zip_current/realtorcom_zip_current.csv'
    },
    { //5
        import: 'https://econdata.s3-us-west-2.amazonaws.com/Reports/Core/RDC_Inventory_Core_Metrics_Zip_History.csv',
        export: 'realtorcom/realtorcom_zip_historical/realtorcom_zip_historical.csv'
    },
    { //6
        import: 'https://econdata.s3-us-west-2.amazonaws.com/Reports/Core/RDC_Inventory_Core_Metrics_State.csv',
        export: 'realtorcom/realtorcom_state_current/realtorcom_state_current.csv'
    },
    { //7
        import: 'https://econdata.s3-us-west-2.amazonaws.com/Reports/Core/RDC_Inventory_Core_Metrics_State_History.csv',
        export: 'realtorcom/realtorcom_state_historical/realtorcom_state_historical.csv'
    },
    { //8
        import: 'https://econdata.s3-us-west-2.amazonaws.com/Reports/Core/RDC_Inventory_Core_Metrics_Country.csv',
        export: 'realtorcom/realtorcom_national_current/realtorcom_national_current.csv'
    },
    { //9
        import: 'https://econdata.s3-us-west-2.amazonaws.com/Reports/Core/RDC_Inventory_Core_Metrics_Country_History.csv',
        export: 'realtorcom/realtorcom_national_historical/realtorcom_national_historical.csv'
    }
]

export const zillowFiles = [
    { //0
        import: 'https://files.zillowstatic.com/research/public_csvs/zhvi/Metro_zhvi_uc_sfrcondo_tier_0.33_0.67_sm_sa_month.csv?t=1651242660',
        export: 'zillow/zillow_home_value_metro/zillow_home_value_metro.csv',
        header: 'home_value'
    },
    { //1
        import: 'https://files.zillowstatic.com/research/public_csvs/zhvi/State_zhvi_uc_sfrcondo_tier_0.33_0.67_sm_sa_month.csv?t=1651242660',
        export: 'zillow/zillow_home_value_state/zillow_home_value_state.csv',
        header: 'home_value'
    },
    { //2
        import: 'https://files.zillowstatic.com/research/public_csvs/zhvi/County_zhvi_uc_sfrcondo_tier_0.33_0.67_sm_sa_month.csv?t=1651242660',
        export: 'zillow/zillow_home_value_county/zillow_home_value_county.csv',
        header: 'home_value'
    },
    { //3
        import: 'https://files.zillowstatic.com/research/public_csvs/zhvi/City_zhvi_uc_sfrcondo_tier_0.33_0.67_sm_sa_month.csv?t=1651242660',
        export: 'zillow/zillow_home_value_city/zillow_home_value_city.csv',
        header: 'home_value'
    },
    { //4
        import: 'https://files.zillowstatic.com/research/public_csvs/zhvi/Zip_zhvi_uc_sfrcondo_tier_0.33_0.67_sm_sa_month.csv?t=1651242660',
        export: 'zillow/zillow_home_value_zip/zillow_home_value_zip.csv',
        header: 'home_value',
        startYear: 2010
    },
    { //5
        import: 'https://files.zillowstatic.com/research/public_csvs/zhvi/Neighborhood_zhvi_uc_sfrcondo_tier_0.33_0.67_sm_sa_month.csv?t=1651242660',
        export: 'zillow/zillow_home_value_neighborhood/zillow_home_value_neighborhood.csv',
        header: 'home_value'
    },
    { //6
        import: 'https://files.zillowstatic.com/research/public_csvs/zori/Zip_ZORI_AllHomesPlusMultifamily_Smoothed.csv?t=1651772717',
        export: 'zillow/zillow_rent_index_zip/zillow_rent_index_zip.csv',
        header: 'rent_index'
    },
    { //7
        import: 'https://files.zillowstatic.com/research/public_csvs/zori/Metro_ZORI_AllHomesPlusMultifamily_Smoothed.csv?t=1651772717',
        export: 'zillow/zillow_rent_index_metro/zillow_rent_index_metro.csv',
        header: 'rent_index'
    },
]