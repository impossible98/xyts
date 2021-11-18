set shell := ["bash", "-uc"]

default:
  just --list

build: fmt
	yarn run build

dev:
	yarn
	yarn run dev

fmt:
	dprint fmt

start:
	yarn run serve

rsync: build
	rsync -av dist/ admin@192.168.31.49:/share/Web/test/
