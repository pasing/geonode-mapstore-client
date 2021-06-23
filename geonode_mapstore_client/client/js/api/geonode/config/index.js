/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import axios from '@mapstore/framework/libs/ajax';

export const getBaseMapConfiguration = (baseMapUrl = '/static/mapstore/configs/map.json') => {
    return axios.get(baseMapUrl)
        .then(({ data }) => data);
};

export const getNewGeoStoryConfig = () => {
    return axios.get('/static/mapstore/configs/geostory.json').then(({ data }) => data);
};

export default {
    getBaseMapConfiguration,
    getNewGeoStoryConfig
};
