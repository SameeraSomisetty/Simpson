@extends('workspace.layouts.main')

@section('sidebar')
<ul>
<!--     <li><a href='/workspace/projects/{{ $project->id }}' class='link-history'><span class='fa fa-line-chart'></span> Activity<div class='highlight'></div></a></li>
    <li><a href='/workspace/projects/{{ $project->id }}/bookmarks' class='link-bookmarks'><span class='fa fa-star-o'></span> Bookmarks<div class='highlight'></div></a></li>
    <li><a href='/workspace/projects/{{ $project->id }}/snippets' class='link-snippets'><span class='fa fa-sticky-note-o'></span> Snippets<div class='highlight'></div></a></li>
    <li><a href='/workspace/projects/{{ $project->id }}/chat' class='link-chat'><span class='fa fa-comment'></span> Group Chat<div class='highlight'></div></a></li>
    <li><a href='/workspace/projects/{{ $project->id }}/docs' class='link-docs'><span class='fa fa-file-text-o'></span> Documents<div class='highlight'></div></a></li> -->
    <li><a href='/workspace/projects/{{ $project->id }}' class='link-view'><span class='fa fa-star-o'></span> View Project<div class='highlight'></div></a></li>
    <li><a href='/workspace/projects/{{ $project->id }}/settings' class='link-settings'><span class='fa fa-cog'></span> Project Settings<div class='highlight'></div></a></li>
</ul>

<script></script>

@yield('context')
@endsection('sidebar')