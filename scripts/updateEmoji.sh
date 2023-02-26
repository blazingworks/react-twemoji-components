rm -rf temp
rm -rf svg
mkdir temp
mkdir svg
git clone https://github.com/twitter/twemoji.git temp/twemoji
cp temp/twemoji/assets/svg/*.svg svg/
rm -rf temp
