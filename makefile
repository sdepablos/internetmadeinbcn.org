DOCKER_NAME = builder

help:
	@cat makefile

### DOCKER CREATION ###
build-image:
	docker build -t $(DOCKER_NAME) .

### DOCKER USE ###
shell:
	docker run --rm -it -v $$PWD:/app -w /app $(DOCKER_NAME) sh 

build:
	docker run --rm -it -v $$PWD:/app -w /app $(DOCKER_NAME) sh -c "bundle install; middleman build"

serve:
	python -m http.server --directory build 8000

.PHONY: help build-image shell build serve
