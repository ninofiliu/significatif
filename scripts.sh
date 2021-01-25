#!/bin/sh
if [ $# -lt 1 ]; then echo "Usage: source scripts.sh COMMAND"; return; fi

case $1 in
  pull)
    gsutil -m rsync -d -r gs://significatif static
    ;;
  push)
    gsutil -m rsync -d -r static gs://significatif
    ;;
  exts)
    echo static/**/*.* | fmt -w 1 | grep -o '\.[^\.]*$' | sort | uniq -c | sort -n
    ;;
  norm)
    if [ $# -lt 3 ]; then echo "Usage source scripts.sh normalize-extensions FROM TO"; return; fi
    from=$2
    to=$3
    len_to_trim=$(echo $from | wc -c)
    for file in static/**/*.$from
    do
      mv $file $(echo $file | rev | colrm 1 $len_to_trim | rev).$to
    done
    ;;
  small)
    for src in $(echo static/**/*.jpg | fmt -w 1 | grep -v '\.small\.jpg')
    do
      dst=$(echo $src | rev | colrm 1 4 | rev).small.jpg
      if [ -f $dst ]; then continue; fi
      convert $src -resize '150x150>' $dst
    done
    ;;
  *)
    echo "Unknown command '$1'"
    ;;
esac
