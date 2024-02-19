alter table "public"."users_lessons_finished" drop constraint "users_lessons_finished_pkey";

drop index if exists "public"."users_lessons_finished_pkey";

CREATE UNIQUE INDEX users_lessons_finished_pkey ON public.users_lessons_finished USING btree (user_address, lesson_slug);

alter table "public"."users_lessons_finished" add constraint "users_lessons_finished_pkey" PRIMARY KEY using index "users_lessons_finished_pkey";


