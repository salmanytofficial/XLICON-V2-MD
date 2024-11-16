# Guru-bot Termux-Hosting-Guide

##  Prerequisites

 - [Git](https://git-scm.com/)
 - [Node.js](https://nodejs.org/en/)
 - [FFmpeg](https://ffmpeg.org/download.html)
 - [ImageMagick](https://imagemagick.org/script/download.php)
 - [webP](https://developers.google.com/speed/webp/download)

 ## 🚀 Installation

 Run the following commands to clone the repo (Use your fork)
 ```SH
> git clone https://github.com/salmanytofficial/XLICON-V2-MD
> cd XLICON-V2-MD
 ```

 Run this following command to install the dependencies 
 ```SH
 > npm install
 ```

 ##  Run

 ```SH
 > npm start
 ```

## `For Ssh/Ubuntu/Linux`
```bash
sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get install -y bash
sudo apt-get install -y libwebp
sudo apt-get install -y git
sudo apt-get install -y nodejs
sudo apt-get install -y ffmpeg
sudo apt-get install -y wget
sudo apt-get install -y imagemagick
git clone https://github.com/<your-gitHub-Username>/XLICON-V2-MD
cd XLICON-V2-MD
npm install
npm start
```

## `For Termux`
```bash
apt update -y && apt upgrade -y && pkg update -y && pkg upgrade -y && pkg install bash -y && pkg install libwebp -y && pkg install git -y && pkg install nodejs -y && pkg install ffmpeg -y && pkg install wget -y && pkg install imagemagick -y && pkg install yarn && termux-setup-storage
cd /sdcard
cd bot folder name
npm install
npm start
```

## `For 24/7 Activation Pm2 (Termux)`
```bash
npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs
```

## `For 24/7 Activation Re-Execution Pm2 (Termux)`
```bash
npm i -g pm2 && pm2 start index.js -f && pm2 save && pm2 logs
```

## `For Github Codespaces`
```bash
sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get install -y bash
sudo apt-get install -y libwebp
sudo apt-get install -y git
sudo apt-get install -y nodejs
sudo apt-get install -y ffmpeg
sudo apt-get install -y wget
sudo apt-get install -y imagemagick
git clone https://github.com/<your-gitHub-Username>/XLICON-V2-MD
cd XLICON-V2-MD
npm install
npm start
```

## `For VPS`
```bash
apt install nodejs 
apt install git 
apt apt install ffmpeg 
apt apt install libwebp 
apt apt install imagrmagick
apt install bash
git clone https://github.com/<your gitHub Username>/XLICON-V2-MD
cd XLICON-V2-MD
npm install
npm start
```


 Running the above command will start the bot okay. To authenticate ( log in to bot )scan the QR which shows up in the terminal using the WA-Web Scanner on your WhatsApp . Good Luck!


 [Set it up on Heroku](https://github.com/salmanytofficial/XLICON-V2-MD/blob/master/Heroku-Hosting-Guide.md)
