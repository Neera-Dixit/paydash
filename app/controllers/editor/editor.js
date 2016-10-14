'use strict';

const Queries = require('../../helpers/queries');
const Translate = require('../../templates/helpers/t');
const EditorParser = require('../../helpers/editor_parser');


exports.getData = {
    handler: function(request, reply) {

        var sequelize = request.server.plugins.sequelize.db.sequelize;

        var block_code = '1709003';
        var step = 't2';
        var queryString = Queries.editor(block_code, step);

        sequelize.query(queryString, {
            type: sequelize.QueryTypes.SELECT
        }).then(function(rows) {

            // Notes:
            // staff_id is included for database update purposes, not to be shown on the editor interface
            // panchayat_code is included for database update purposes, not to be shown on the editor interface
            // How do we deal with designations of already-seeded users that are different from the approved list of designations?
            // --> Set the dropdown default as blank and make them choose from the list
            // 

            var data = EditorParser.parser(rows);

            // data.translation = Translate('/editor/editor', request.auth.credentials, null);
            reply(data);
        });
    }
};