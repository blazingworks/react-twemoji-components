rm -rf temp
mkdir temp
git clone https://github.com/twitter/twemoji.git temp/twemoji
cp temp/twemoji/assets/svg/*.svg svg/
rm -rf temp