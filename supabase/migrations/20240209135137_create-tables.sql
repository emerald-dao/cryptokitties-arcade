create table "public"."users" (
    "address" text not null,
    "created_at" timestamp with time zone not null default now()
);


alter table "public"."users" enable row level security;

create table "public"."users_lessons_finished" (
    "user_address" text not null,
    "lesson_slug" text not null,
    "created_at" timestamp with time zone not null default now()
);


alter table "public"."users_lessons_finished" enable row level security;

CREATE UNIQUE INDEX users_lessons_finished_pkey ON public.users_lessons_finished USING btree (user_address);

CREATE UNIQUE INDEX users_pkey ON public.users USING btree (address);

alter table "public"."users" add constraint "users_pkey" PRIMARY KEY using index "users_pkey";

alter table "public"."users_lessons_finished" add constraint "users_lessons_finished_pkey" PRIMARY KEY using index "users_lessons_finished_pkey";

alter table "public"."users_lessons_finished" add constraint "users_lessons_finished_user_address_fkey" FOREIGN KEY (user_address) REFERENCES users(address) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."users_lessons_finished" validate constraint "users_lessons_finished_user_address_fkey";

grant delete on table "public"."users" to "anon";

grant insert on table "public"."users" to "anon";

grant references on table "public"."users" to "anon";

grant select on table "public"."users" to "anon";

grant trigger on table "public"."users" to "anon";

grant truncate on table "public"."users" to "anon";

grant update on table "public"."users" to "anon";

grant delete on table "public"."users" to "authenticated";

grant insert on table "public"."users" to "authenticated";

grant references on table "public"."users" to "authenticated";

grant select on table "public"."users" to "authenticated";

grant trigger on table "public"."users" to "authenticated";

grant truncate on table "public"."users" to "authenticated";

grant update on table "public"."users" to "authenticated";

grant delete on table "public"."users" to "service_role";

grant insert on table "public"."users" to "service_role";

grant references on table "public"."users" to "service_role";

grant select on table "public"."users" to "service_role";

grant trigger on table "public"."users" to "service_role";

grant truncate on table "public"."users" to "service_role";

grant update on table "public"."users" to "service_role";

grant delete on table "public"."users_lessons_finished" to "anon";

grant insert on table "public"."users_lessons_finished" to "anon";

grant references on table "public"."users_lessons_finished" to "anon";

grant select on table "public"."users_lessons_finished" to "anon";

grant trigger on table "public"."users_lessons_finished" to "anon";

grant truncate on table "public"."users_lessons_finished" to "anon";

grant update on table "public"."users_lessons_finished" to "anon";

grant delete on table "public"."users_lessons_finished" to "authenticated";

grant insert on table "public"."users_lessons_finished" to "authenticated";

grant references on table "public"."users_lessons_finished" to "authenticated";

grant select on table "public"."users_lessons_finished" to "authenticated";

grant trigger on table "public"."users_lessons_finished" to "authenticated";

grant truncate on table "public"."users_lessons_finished" to "authenticated";

grant update on table "public"."users_lessons_finished" to "authenticated";

grant delete on table "public"."users_lessons_finished" to "service_role";

grant insert on table "public"."users_lessons_finished" to "service_role";

grant references on table "public"."users_lessons_finished" to "service_role";

grant select on table "public"."users_lessons_finished" to "service_role";

grant trigger on table "public"."users_lessons_finished" to "service_role";

grant truncate on table "public"."users_lessons_finished" to "service_role";

grant update on table "public"."users_lessons_finished" to "service_role";


