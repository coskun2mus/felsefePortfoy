@echo off
chcp 65001 >nul
title Agora Felsefe Portföyü Başlatıcı

echo ======================================================
echo    AGORA FELSEFE PORTFÖYÜ BAŞLATILIYOR...
echo ======================================================
echo.

cd /d "%~dp0"

if not exist node_modules (
    echo [1/3] İlk kurulum yapılıyor, kütüphaneler yükleniyor...
    call npm install
) else (
    echo [1/3] Kütüphaneler hazır.
)

if not exist .env (
    if exist .env.example (
        echo [2/3] Ayar dosyası oluşturuluyor...
        copy .env.example .env >nul
    )
) else (
    echo [2/3] Ayar dosyası hazır.
)

echo [3/3] Sunucu başlatılıyor ve tarayıcı açılıyor...
echo.
echo ------------------------------------------------------
echo  Adres: http://localhost:8080
echo  Durdurmak için bu siyah pencereyi kapatabilirsiniz.
echo ------------------------------------------------------
echo.

start http://localhost:8080
node server.js
pause
