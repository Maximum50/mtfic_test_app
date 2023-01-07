FROM python:3.9 as base

# Set environment variables
# stdout and stderr are sent straight the container logs & can be seen in application logs in real time.
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Create a user to avoid running containers as root in production
RUN addgroup --system djangoapp \
    && adduser --system --ingroup djangoapp djangoapp

# Install os-level dependencies (as root)
RUN apt-get update && apt-get install -y -q --no-install-recommends \
  # dependencies for building Python packages
  build-essential \
  # cleaning up unused files to reduce the image size
  && apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false \
  && rm -rf /var/lib/apt/lists/*

# Switch to the non-root user
USER djangoapp
# Create a directory for the source code and use it as base path
WORKDIR /home/djangoapp/code/

# Copy the python depencencies list for pip
COPY --chown=djangoapp:djangoapp ./requirements.txt requirements.txt
# Switch to the root user temporary, to grant execution permissions.
USER root
# Install python packages at system level
RUN pip install --no-cache-dir -r /home/djangoapp/code/requirements.txt



# Copy the scripts that starts the application server
COPY --chown=djangoapp:djangoapp ./testapp/start.sh /usr/local/bin/start.sh
COPY --chown=djangoapp:djangoapp ./testapp/testapp  /home/djangoapp/code/testapp
COPY --chown=djangoapp:djangoapp ./testapp/manage.py /home/djangoapp/code/manage.py
USER root
RUN chmod +x /usr/local/bin/start.sh
USER djangoapp
# The application server starts by default when the container starts
# CMD ["start.sh"]
ENTRYPOINT [ "start.sh" ]