#!/bin/bash

pwd
export ORIGINAL=$(pwd)
TESTDIR=/tmp/outside-git-rev
mkdir -p $TESTDIR
cp $ORIGINAL/index.js $TESTDIR/index.js
cp $ORIGINAL/example/outside.js $TESTDIR/outside.js
(
  cd $TESTDIR
  echo "inside" $TESTDIR
  pwd
  ORIGINAL=$ORIGINAL node outside.js
)
rm -Rfv $TESTDIR

