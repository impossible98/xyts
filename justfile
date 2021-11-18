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
