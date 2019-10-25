#!/bin/bash
#TODAY=`(set \`date\`; echo $2_$3)`

mongoexport $1 $2 -o outfile.json
#genre_exp = mongoexport -d friends - c genre -o outfile.json
#articles_exp = mongoexport -d friends - c articles -o outfile.json

exit;
EOF